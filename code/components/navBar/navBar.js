// components/navBar/navBar.js
Component({
  properties: {
    nav:{
      type:Object
    }
  },
  
  data: {
    
  },

  methods: {
    handleTap(){
      this.triggerEvent("Click");
    }
  },
})
