export default {
  // source: './videos/test.mp4',
  //source: './videos/org-reduced_mpge4.mp4',
  source: './videos/org-reduced.mp4',
  //source: './videos/production_id 5192157 (1080p)(1).mp4',
  //source: './videos/istockphoto-1344438584-640_adpp_is.mp4',
  
  canvas:[
    {
      name:"logo",
      type:'image',
      visible:{
        from:1.1,
        to:2.8
      },
      props:{
        x:0,
        y:0
      }
    },
    {
      name:"area-01",
      type:'polygon',
      styles:{
        fill:'#ff000055',
        border:'2px solid black',
      },
      animateNodes: false,
      frames:[
        {
          x:0,
          y:0,
          timeFrom:3.2,
          timeTo:5.2
        }
      ],
      visible:{
        from:3.2,
        to:4.9
      },
      nodes:[
        {
          id:'node1',
          frames:[
            {
              x:0,
              y:0,
              time:3.2,
            },
            {
              x:100,
              y:20,
              time:4.9,
            }
          ],
        } ,
        
       
      ]
    }
  ]
}