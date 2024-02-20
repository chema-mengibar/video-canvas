export default {
  // source: './videos/test.mp4',
  //source: './videos/org-reduced_mpge4.mp4',
  source: './videos/org-reduced.mp4',
  //source: './videos/production_id 5192157 (1080p)(1).mp4',
  //source: './videos/istockphoto-1344438584-640_adpp_is.mp4',
  
  canvas:[
    {
      id:'0001',
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
      id:'0002',
      name:"area-01",
      type:'polygon',
      styles:{
        fill:'#ff000055',
        border:'2px solid black',
      },
      animateNodes: true,
      // frames:[
      //   {
      //     x:0,
      //     y:0,
      //     timeFrom:3.2,
      //     timeTo:5.2
      //   }
      // ],
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
        {
          id:'node2',
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
        {
          id:'node3',
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