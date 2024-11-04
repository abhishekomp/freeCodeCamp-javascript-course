/* This js file is not needed in this example 
because we are initialising the alpine component using x-data in the html page itself.
See index.html page for more details.
*/
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