<template>
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="btn btn-sm btn-primary" exact><a class="btn btn-sm">Home</a></router-link>
        <router-link to="/user" tag="li" active-class="btn btn-sm btn-primary"><a class="btn btn-sm">User</a></router-link>
        <router-link to="/dog" tag="li" active-class="btn btn-sm btn-primary"><a class="btn btn-sm">Dog</a></router-link>
    </ul>
</template>