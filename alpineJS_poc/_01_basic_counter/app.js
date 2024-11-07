document.addEventListener('alpine:init', () => {
  Alpine.data('counter', () => ({
      count: 0,

      init() {
        console.log("Inside init() function")
        this.count = 100;
        this.anotherFunc(this.count); //invoking another function in the js file
      },

      increment() {
          this.count = this.count + 10
      },
      
      reset() {
        this.count = 100
      },

      anotherFunc(pageNo) {
        console.log("inside anotherFunc");
        console.log("Page No:", pageNo);
      }
  }))
})