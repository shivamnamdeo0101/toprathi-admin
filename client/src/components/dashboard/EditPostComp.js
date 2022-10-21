import React, { useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import NewsService from '../../service/api/NewsService';

function EditPostComp() {
    const history = useHistory();

    const { newsEdit ,newsGetById} = NewsService;
    const { newsId } = useParams();

    const [news_data, setnews_data] = useState({});
    useEffect(() => {
        newsGetById(newsId)
        .then(item=>{
            setnews_data(item.data);
            console.log(news_data)
        })
    }, [])
    

    const { register, handleSubmit, reset,setValue, watch, formState: { errors } } = useForm(
        );

      useEffect(() => {
        // reset form with user data
        reset(news_data);
    }, [news_data]);


    const onSubmit = data => {

        console.log(data);
        const res = {
            "title": data.title,
            "content": data.content,
            "timestamp": Date.now(),
            "author": "shivam",
            "image": "https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/SourceImage/news-corp-359.jpg",
            "views": 1,
            "tags": [
                "Sports"
            ],
            "addAt": Date.now(),
            "updatedAt": Date.now()
        }
        EditNewsFun(res)
        //console.log(res)
        reset()
        history.push("/")
    };


    const EditNewsFun = async (data) => {
        const res = await newsEdit(data, newsId);
        console.log(res);
    }

    return (
        <div className='add_post_form'>
            <div className='add_post_form_head'>
                <h2>Edit Post</h2>
            </div>

            <div className='add_post_form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='post_form_comp'>
                        <label>Title</label>
                        <input {...register("title", { required: true })} />
                        {errors.title && <span className='error'>Title is required</span>}
                    </div>

                    <div className='post_form_comp'>
                        <label>Description</label>
                        <input {...register("content", { required: true })} />
                        {errors.content && <span className='error'>Description field is required</span>}
                    </div>
                    <div className='post_form_comp'>
                        <label>Description</label>
                        <input type="file" {...register("image", { required: true })} />
                        {errors.image && <span className='error'>Image field is required</span>}
                    </div>


                    <input type="submit" className='button' />
                </form>
            </div>
        </div>
    )
}

export default EditPostComp