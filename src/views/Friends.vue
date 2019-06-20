<template>
<div class="friends">
    <div class="searchbar">
    <b-field>
        <b-input v-model="searchInput" placeholder="Search..." type="search" icon-pack="fas" size="is-large" icon="search">
        </b-input>
        <b-button @click="search" type="is-danger" size="is-large" rounded>Go</b-button>
    </b-field>
    </div>
    <div class="notif-area">
        
    <b-notification v-show="showFriend"
            type="is-info"
            
            aria-close-label="Close notification" :closable="false">
            <h1>{{searchInput}}</h1>
            <b-button @click="addFriend" type="is-danger" size="is-large" rounded>Add</b-button>
    </b-notification>
    </div>
</div>
</template>

<script>
import {
    isUser
} from "../user";


export default {
    data: function () {
        return {
            searchInput: "",
            showFriend:false ,
            friendName:""
        }
    },
    methods: {
        search:async function () {
            if (this.searchInput.length > 0) {
                let response = await isUser(this.searchInput)
                  
                    if (response.flag) {
                    this.$toast.open({
                        message:"User exists",
                        type:"is-success"
                    })
                    this.showFriend = true 
                     
                } else {
                   this.$toast.open({
                        message:response.error,
                        type:"is-danger"
                    }) 
                }
            }
        },
        
        addFriend : function(){
            
        }
    }
}
</script>

<style scoped>
.friends {
    height: 100vh;
    padding: 10em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.searchbar>button {
    margin-left: 1em;
}

.searchbar{
    display: flex;
    justify-content: center;
    margin-bottom: 5em;
}

.notif-area{
    padding: 0 20em;
}
</style>
