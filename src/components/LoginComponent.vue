<template>
	<ion-page>
		<ion-content class="login_cont">
				<ion-list class="list-log">
					<ion-title color="medium">
						Iniciar sesión
					</ion-title>
					<ion-item>
						<ion-label position="floating">
							Usuario/Correo
						</ion-label>
						<ion-input v-model="email" type="email"/>
					</ion-item>
					<ion-item>
						<ion-label position="floating">
							Contraseña
						</ion-label>
						<ion-input type="password" @keydown.enter="now_logged()"/>
					</ion-item>
					<ion-button expand="block" @click="now_logged()" class="log_btn" color="button">
						iniciar-sesion
					</ion-button>
				</ion-list>
		</ion-content>
	</ion-page>
</template>


<script lang="ts">
	import login from "@/pages_resources/LoginComponent/login";
	export default{
		extends: login,
	};
</script>

<style scoped>
	@import "@/pages_resources/LoginComponent/login.css"
</style>
