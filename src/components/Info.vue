<template>
    <div class="info">
    <b-field grouped class="tags">
            <div class="control ">
                <b-taglist attached>
                    <b-tag type="is-dark is-large">Username</b-tag>
                    <b-tag type="is-info is-large">{{username}}</b-tag>
                </b-taglist>
            </div>

            <div class="control">
                <b-taglist attached >
                    <b-tag type="is-dark is-large">Email</b-tag>
                    <b-tag type="is-info is-large">{{email}}</b-tag>
                </b-taglist>
            </div>

            <div class="control">
                <b-taglist attached>
                    <b-tag type="is-dark is-large">Name</b-tag>
                    <b-tag type="is-info is-large">{{name}}</b-tag>
                </b-taglist>
            </div>

            <div class="control">
                <b-taglist attached>
                    <b-tag type="is-dark is-large">Friends</b-tag>
                    <b-tag type="is-info is-large">{{friends}}</b-tag>
                </b-taglist>
            </div>

            
        </b-field>
        </div>
</template>

<script>

export default {
    name:'Info',
    computed:{
        username:function(){
            return sessionStorage.getItem("username")
        },
        email:function(){
            return sessionStorage.getItem("email");
        },
        friends:function(){
            return sessionStorage.getItem("friends").length;
        },
        name:function(){
            return sessionStorage.getItem("name");
        }
    }
}
</script>

<style>
.info{
    display : grid;
    flex-direction: column;
   /* justify-content: center; */
    width: 100vw;
    padding: 5em;
}

.tags{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}
</style>
