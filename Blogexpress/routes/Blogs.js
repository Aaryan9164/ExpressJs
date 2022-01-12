const express = require('express')
const router =express.Router()
const path=require('path')
const blogs=require('../data/blogs.js')


router.get('/',(req,res)=>{

    //res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home');
})



router.get('/blog',(req,res)=>{
    // blogs.forEach(e=>{
    //     console.log(e.title)
    // });

    //res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
    res.render('bloghome',{
        blogs: blogs
    });
})

router.get('/blogpost/:slug',(req,res)=>{

   myBlog= blogs.filter((e)=>{

   return  e.slug==req.params.slug
    })
    console.log(myBlog)
    res.render('blogpage',{
        title:myBlog[0].title,
        content:myBlog[0].content

    })

    //res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
})


module.exports=router
