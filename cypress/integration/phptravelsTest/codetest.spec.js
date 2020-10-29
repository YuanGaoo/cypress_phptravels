describe('lalala',()=>{


    it('balalala',()=>{
        cy.log('aaaaa')
        var name= 'hello world';
         var count = 0;
         var ch =''
         var max =0;
        for(var i = 0; i < name.length; i++){
            for(var j = 1; j < name.length; j ++){
                if(name[i] == name[j]){
                    count ++;
                }
            
            } // 1 2

            if(max < count){
                max = count
                ch = name[i]
            }
            count = 0
        }
        cy.log(ch+' - '+ max)
    })

})


