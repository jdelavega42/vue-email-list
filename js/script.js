const { createApp } = Vue;
createApp({
    data (){
            return {
                list: [],

        }
    },
    methods: {
        generateArray(){
            for (let i = 0; i < 10; i++){
                this.generateMail();
                console.log(this.list);
            };
        },
        generateMail() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail",{
            }).then((resp) => {
                this.list.push(resp.data.response);
            })
        }

    }

}).mount("#app");