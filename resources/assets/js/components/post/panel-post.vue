<template>
  <div class="panel list-item panel-default">
    <div class="panel-body">
      <div class="media">

        <div class="media-left">
          <a :href="baseUrl + '/profile/' + postAct.user.id">
            <img class="media-object" :src="baseUrl + '/image/user/' + postAct.user.id + '?wh=64'" :alt="fullname">
          </a>
        </div>

        <div class="media-body">
          <h4 class="media-heading"><a :href="baseUrl + '/profile/' + postAct.user.id">{{fullname}}</a></h4>
          {{date}}
        </div>

        <slot name="dropdown-menu"></slot>

        <h3>{{postAct.title}}</h3>
        <p :class="enlarge ? 'enlarge' : ''" v-html="desc"></p>

      </div> <!-- .media -->
    </div> <!-- .panel-body -->

    <div v-if="postAct.photos.length > 0" class="post-photos">
      <a v-for="photo in postAct.photos" :href="baseUrl + '/post/' + postAct.id + '/image/' + photo.name" :style="'background-image: url(\'' + baseUrl + '/image/post/' + photo.name +'\')'" @click.prevent="$emit('show-carousel-modal', postAct.title, postAct.photos, photo)">
      </a>
    </div> <!-- .post-photos -->

  </div> <!-- .panel -->
</template>

<script>
  export default {

    props: {

      postAct: {
        type:      Object,
        required:  true
      }

    },

    computed: {

      enlarge() {

        if (this.postAct.desc.length <= 85)   return true
        else                                  return false

      },

      baseUrl() {

        return window.location.origin

      },

      fullname() {

        return this.postAct.user.fname + ' ' + this.postAct.user.lname

      },

      date() {

        var date = this.postAct.created_at

        if      (moment().diff(moment(date), 'second') <= 5)  return 'just now'
        else if (moment().diff(moment(date), 'day') == 0)     return moment(date).fromNow()
        else if (moment().diff(moment(date), 'day') == 1)     return 'yesterday at ' + moment(date).format('h:mm a')
        else if (moment().diff(moment(date), 'day') < 7)      return moment(date).format('ddd [at] h:mm a')
        else if (moment().diff(moment(date), 'year') == 0)    return moment(date).format('MMM D [at] h:mm a')
        else                                                  return moment(date).format('MMM D, YYYY [at] h:mm a')

      },

      desc() {

        var text = this.postAct.desc

        text = text.replace(/[(<>"'&]/g, function (char) {

          if      (char == "<")   return "&lt;"
          else if (char == ">")   return "&gt;"
          else if (char == "\"")  return "&quot;"
          else if (char == "'")   return "&apos;"
          else if (char == "&")   return "&amp;"

        })

        var hashed = text.match(/\s?#\w+\s?/g)

        hashed = _.map(hashed, function (word) {

          return _.trim(word)

        })

        _.forEach(hashed, function (word) {

          if (/^#\d+$/.test(word))  return
          else                      text = text.replace(word, '<a href="' + window.location.origin + '/search?key=' + word + '">' + word + '</a>')

        })

        text = text.replace(/[\n\r\f]/g, '<br>')

        return text

      }

    } // computed

  }
</script>