<template>
	<div class="absolute flex items-center flex-col w-[300px] lg:w-[360px] h-[300px] sm:h-[430px] left-[calc(50%-150px)] sm:left-3 lg:left-10 top-7 sm:top-28 text-gray-300 z-10 bg-black/20 rounded-md backdrop-filter backdrop-blur-lg shadow-2xl">
		<h1 class="text-2xl m-3">Контакные данные</h1>
		<div class="flex flex-col w-full h-full p-2 lg:p-4 text-xs lg:text-sm justify-around">
			
			<div class="flex items-center">
				<LocationMarkerIcon class="w-5 h-5" />
				<p class="ml-2">720023. Кыргызская Республика, г. Бишкек</p>
			</div>

			<div class="flex items-center">
				<LibraryIcon class="w-5 h-5" />
				<p class="ml-2">ул. Тазабека Саманчина, 6а</p>
			</div>

			<div class="flex items-center">
				<PhoneIcon class="w-5 h-5" />
				<p class="ml-2">тел.: 0(312) 88 69 16</p>
			</div>

			<div class="flex items-center">
				<PhoneIncomingIcon class="w-5 h-5" />
				<p class="ml-2">тел.: 0(312) 88 69 17</p>
			</div>

			<div class="flex items-center">
				<DeviceMobileIcon class="w-5 h-5" />
			<p class="ml-2">WatsApp: 0555 555 555</p>
			</div>

			<div class="flex items-center">
				<MailIcon class="w-5 h-5" />
				<p class="ml-2">Электронный адрес: <span>info@kyrgyztest.gov.kg</span></p>
			</div>

		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LocationMarkerIcon } from '@heroicons/vue/outline'
import { LibraryIcon } from '@heroicons/vue/outline'
import { PhoneIncomingIcon } from '@heroicons/vue/outline'
import { PhoneIcon } from '@heroicons/vue/outline'
import { DeviceMobileIcon } from '@heroicons/vue/outline'
import { MailIcon } from '@heroicons/vue/outline'

export default defineComponent({
	components: {
		LocationMarkerIcon,
		LibraryIcon,
		PhoneIncomingIcon,
		PhoneIcon,
		DeviceMobileIcon,
		MailIcon
	},
	setup() {
		
	},
})
</script>
