document.addEventListener('alpine:init', () => {
  Alpine.data('counter', () => ({
      count: 0,

      init() {
        console.log("Inside init() function")
        this.count = 100;
      },

      increment() {
          this.count = this.count + 10
      },
      
      reset() {
        this.count = 100
      }  
  }))
})