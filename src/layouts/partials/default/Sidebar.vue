<template>
    <div class="w-1/5 h-screen sticky pin-t bg-brand-dark text-brand-lightest">
        <div class="p-8 border-b-8 border-brand-light text-center">
            <router-link :to="{ name: 'home' }">logo here</router-link>
        </div>
        <nav class="p-8">
            <div>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </div>
            <ul class="list-reset">
                <li><router-link :to="{ name: 'dashboard1' }">Ver. 1</router-link></li>
                <li><a href="javascript:void(0);">Dashbaord 2</a></li>
            </ul>
            <div>Tables</div>
            <div>Maps</div>
            <ul class="list-reset">
                <li><a href="javascript:void(0);">Vector Maps</a></li>
                <li><a href="javascript:void(0);">Google Maps</a></li>
            </ul>
        </nav>
    </div>
</template>
