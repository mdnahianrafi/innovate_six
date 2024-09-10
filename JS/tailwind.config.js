tailwind.config = {

    theme:
    {
        extend:
        {
            // Color Part 
            colors:
            {
                headerColor: '#160C6D',
                btnColor: '#1BBF00',
                counterColor: '#F9F9FB',
                cpColor:  '#141135',
                cplineColor: 'rgba(79, 88, 95, 0.316)',
                serviceColor: '#F6F5FF',
                servicehoverColor:'#6B62C5',
                afterColorOne: 'rgba(25, 191, 0, 0.561)',
                afterColor: '#FFFF',
                afhoverColor: 'rgba(131, 228, 116, 0.561)',
                rightColor: '#F9F9FB',
                greenColor: '#1BBF00',
                emojihoverColor: '#6001D3',
                starColor: '#FF7628',
                reviewColor: '#726E9E',
                footerbgcolor:'#48409C',
            },

            // Container Part 
            maxWidth:
            {
                headerContainer: '1170px',
                bannerContainer: '962px',
                counterContainer: '1209px',
                chooseContainer: '1147px',
                impactContainer: '1080px',
                impactIcon: '63px',
                reviewContainer: '1408px',
                blogcontainer: '982px'
                

            },

            // Font Family 

            fontFamily:
            {
                open: ['Open Sans'],
                papri: ['Paprika'],
            },
         
            // Background Images
            backgroundImage:
            {
                bannerImage:"url('./images/banner.png')",
                cardImage: "url('./images/bgcard.png)",
                choosebanner:"url('./images/choose.png')",
                impactImage:"url('./images/impact.png')",
                blogbannerImage:"url('./images/Blogbanner.png')",
            },


            borderRadius: {
                'custom-rounded': '13% 16% 9% 9% / 25% 25% 24% 24%',

              }




        }
    }
}