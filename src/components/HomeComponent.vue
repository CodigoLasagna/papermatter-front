<template>
	<ion-page>
		<ion-content class="main_content">
			<ion-text class="texto">
				La mejor solución en papel, Impresoras y utensilios de oficina.
			</ion-text>
			<ion-row class="carousel">
				<ion-col v-for="(image, index) in images" :key="index">
					<ion-card class="card">
						<ion-img :src="image" class="image_card"/>
						<ion-card-header color="light">
							<ion-title class="ion-text-center">
								{{titles[index]}}
							</ion-title>
						</ion-card-header>
					</ion-card>
				</ion-col>
			</ion-row>
		</ion-content>
	</ion-page>
</template>


<script lang="ts">
	import home from '@/pages_resources/HomeComponent/home';
	export default{
		extends: home,
	};
</script>

<style scoped>
	@import "@/pages_resources/HomeComponent/home.css"
</style>
