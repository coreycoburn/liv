<template>
    <div id="app" class="flex">
        <app-sidebar/>

        <div class="flex flex-col flex-1">
            <app-header/>
            <app-sub-header/>

            <div class="flex-1 p-8">
                <transition name="fade">
                    <router-view/>
                </transition>
            </div>

            <app-footer/>
        </div>
    </div>
</template>

<script>
import AppSidebar from './partials/default/Sidebar'
import AppHeader from './partials/default/Header'
import AppSubHeader from './partials/default/SubHeader'
import AppFooter from './partials/default/Footer'

export default {
    components: {
        AppSidebar,
        AppHeader,
        AppSubHeader,
        AppFooter
    }
}
</script>
