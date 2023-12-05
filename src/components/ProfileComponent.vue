<template>
	<ion-page>
		<ion-content class="main_content">
			<ion-item color="tertiary">
				usuario: {{username}}
			</ion-item>
			<ion-list>
				<ion-item>
					<ion-label position="floating">
						Tarjeta:
					</ion-label>
					<ion-input v-model="account" type="password">
					</ion-input>
				</ion-item>
				<ion-item>
					<ion-label position="floating">
						Fecha de tarjeta:
					</ion-label>
					<ion-input v-model="date" type="password">
					</ion-input>
				</ion-item>
				<ion-item>
					<ion-label position="floating">
						CCV:
					</ion-label>
					<ion-input v-model="ccv">
					</ion-input>
				</ion-item>
			</ion-list>
			<ion-button>
				guardar datos
			</ion-button>
			<ion-button color="warning">
				cambiar contraseña
			</ion-button>
		</ion-content>
	</ion-page>
</template>


<script lang="ts">
	import profile from "@/pages_resources/ProfileComponent/myprof";
	export default{
		extends: profile,
	};
</script>

<style scoped>
	@import "@/pages_resources/ProfileComponent/myprof.css"
</style>
