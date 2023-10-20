module.exports={  
    plugins: {  
      'postcss-pxtorem': {  
        rootValue: 16, // 设计稿宽度/10, 例如设计稿宽度为 375px, 则 rootValue 为 37.5  
        propList: ['*'], // 需要转换的属性，这里表示所有属性都转换  
        selectorBlackList: ['html'], // 需要过滤的选择器，这里表示不转换 html 选择器  
      },  
    },  
  };