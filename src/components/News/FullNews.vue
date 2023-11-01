<template>
  <div
    class="flex flex-col tracking-wide"
    v-if="selectedPost"
  >
    <div>
      <span>12.06.2023</span>
    </div>
    <!-- <h1 class="flex justify-center leading-8 text-2xl md:text-3xl lg:text-4xl font-bold my-7 sm:m-16">{{ selectedPost.title }}</h1> -->
    <h1 class="flex justify-center leading-8 text-2xl md:text-3xl lg:text-4xl font-bold my-7 sm:m-16">КЫРГЫЗТЕСТ: КР ТРАНСПОРТ ЖАНА КОММУНИКАЦИЯЛАР МИНИСТРЛИГИНДЕГИ ЖЫЙЫН</h1>
    <!-- <div class="text-justify leading-7 md:leading-8 text-sm md:text-lg mb-32" v-html="formatAndSanitize(selectedPost.body)"></div> -->
    <div class="text-justify leading-7 md:leading-8 text-sm md:text-lg mb-32" v-html="formatAndSanitize(`КР Президентине караштуу Мамлекеттик тил жана тил саясаты боюнча улуттук комиссиянын төрагасы К.О. Осмоналиев «Мамлекеттик, муниципалдык органдардагы мамлекеттик тилдин колдонулушу: «Кыргыз Республикасынын мамлекеттик тили жөнүндө» КР Мыйзамынын аткарылышы тууралуу баяндама жасады. Ал эми «Кыргызтест» мамлекеттик мекемесинин иши жана алдыдагы максаттары тууралуу мекеменин директору Б.Б. Топоева-Ставинская айтып берди. Ошондой эле аталган министрликтеги мамлекеттик тилдин абалы боюнча министрдин орун басары маалымат берди.
      Жыйынга КР Президентине караштуу Мамлекеттик тил жана тил саясаты боюнча улуттук комиссиянын төрагасы К.О. Осмоналиев, КР Президентинин Администрациясынын изилдөөлөр, саясатты иштеп чыгуу жана реформаларды ишке ашыруу бөлүмүнүн башчысынын орун басары О.Э. Капалбаев, Кыргыз Республикасынын Транспорт жана коммуникациялар министринин орун басары А.А. Досалиев, Кыргызтест мамлекеттик мекемесинин директору Б.Б. Топоева-Ставинская, КР Транспорт жана коммуникациялар министрлигинин аппарат кызматкерлери, түзүмдүк бөлүмдөрдүн жетекчилери катышышты.
      КР Президентине караштуу Мамлекеттик тил жана тил саясаты боюнча улуттук комиссиянын төрагасы К.О. Осмоналиев «Мамлекеттик, муниципалдык органдардагы мамлекеттик тилдин колдонулушу: «Кыргыз Республикасынын мамлекеттик тили жөнүндө» КР Мыйзамынын аткарылышы тууралуу баяндама жасады. Ал эми «Кыргызтест» мамлекеттик мекемесинин иши жана алдыдагы максаттары тууралуу мекеменин директору Б.Б. Топоева-Ставинская айтып берди.
      Ошондой эле аталган министрликтеги мамлекеттик тилдин абалы боюнча министрдин орун басары маалымат берди.
      2023-жылдын 14-апрелинде Кыргыз Республикасынын Транспорт жана коммуникациялар министрлигинде «Мамлекеттик органдардагы мамлекеттик тилдин абалы» аттуу жыйын болду.`)">
    </div>

    <NewsImages :images="imgUrls" />
  </div>

  <div v-else class="flex flex-col w-full gap-2 mt-14">
    <SkeletonLoader class="w-1/2 h-6 mb-6" />
    <div v-for="i in 9">
      <SkeletonLoader class="w-full h-2 mt-2" />
    </div>
    <div class="flex flex-col justify-center items-center w-full gap-3 sm:flex-row">
      <SkeletonLoader class="mt-8 w-full sm:w-1/2 h-48 sm:h-96 flex justify-center items-center text-gray-400">{{$t('skeleton.image')}}</SkeletonLoader>      
      <SkeletonLoader class="mt-8 w-full sm:w-1/2 h-48 sm:h-96 flex justify-center items-center text-gray-400">{{$t('skeleton.image')}}</SkeletonLoader>      
    </div>
  </div>

</template>

<script lang="ts" setup>
import NewsImages from "./NewsImages.vue";
import SkeletonLoader from "@/components/UI/SkeletonLoader.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { ActionTypes } from "@/store/modules/action-types";
import DOMPurify from "dompurify";

const store = useStore();
const route = useRoute();
const postId = Number(route.params.id);

const imgUrls = ref([
  "https://kyrgyztest.gov.kg/wp-content/uploads/2022/08/IMG_20220805_092136-1280x720.jpg",
  "https://kyrgyztest.gov.kg/wp-content/uploads/2022/08/IMG_5849-960x720.jpeg",
  "https://kyrgyztest.gov.kg/wp-content/uploads/2023/06/2-1.jpg",
  "https://kyrgyztest.gov.kg/wp-content/uploads/2023/06/160623121822_1-37-1-1132x720.jpg"
]);

const selectedPost = computed( () => store.getters.GET_POST.find((post: { id: number; }) => post.id === postId) );

if(!selectedPost.value) {
  store.dispatch(ActionTypes.FetchPosts, postId);
};

const formatAndSanitize = (text:string) => {
  const paragraphs = text.split('\n');
  const sanitizedParagraphs = paragraphs.map(paragraph => DOMPurify.sanitize(paragraph));
  return sanitizedParagraphs.map(paragraph => `<p>${paragraph}</p>`).join('<br/>');
};

</script>
