import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import NewsService from '../../service/api/NewsService';
import Select from 'react-select';
function EditPostComp() {
    const history = useHistory();

    const { newsEdit, newsGetById } = NewsService;
    const { newsId } = useParams();
    const [image, setimage] = useState("");

    const [options, setoptions] = useState([{ value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },])

    
    const [tags, settags] = useState([]);
    const [news_data, setnews_data] = useState({});
    useEffect(() => {
        newsGetById(newsId)
            .then(item => {
                setnews_data(item.data);
                settags(item.data.tags)
                setimage(item.data.image)
               
            })
    }, [])


    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm(
    );

    useEffect(() => {
        // reset form with user data
        reset(news_data);
    }, [news_data]);


    const onSubmit = data => {

        console.log(tags);
        const res = {
            "title": data.title,
            "content": data.content,
            "form_link":data.form_link,
            "timestamp": Date.now(),
            "author": "shivam",
            "image": image ? image : "https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/SourceImage/news-corp-359.jpg",
            "views": 1,
            "tags":tags,
            "addAt": data.addAt,
            "updatedAt": Date.now()
        }
        EditNewsFun(res)
        //console.log(res)
        reset()
        history.push("/")
    };


    const EditNewsFun = async (data) => {
        if (!image) { alert("Please attach image...") }

        if (image) {
            const res = await newsEdit(data, newsId);
            console.log(res,"RES");
        }
    }
    function encodeImageFileAsURL(file) {

        var reader = new FileReader();
        reader.onloadend = function () {
            const imagebase64 = reader.result;
            setimage(imagebase64)
        }
        reader.readAsDataURL(file);
    }
    const uploadImage = (file) => {
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "tutorial")
        data.append("cloud_name", "breellz")
        fetch("CLOUDINARY_URL=cloudinary://254498432442583:qlgePH-Lq0iMY_A-DJlZh_N-cc4@dtyoyswcx", {
            method: "post",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setimage(data.url)
        })
        .catch(err => console.log(err))
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
                        <label>Form Link (optional)</label>
                        <input {...register("form_link", { required: false })} />
                        
                    </div>
                    <div className='post_form_comp'>
                        <label>Image</label>
                        <div className='dashboard_articles_comp_center articles_comp'>
                            <img src={image} />
                        </div>

                        <input type="file" accept="image/jpeg, image/png" onChange={(e) => uploadImage(e.target.files[0])} />


                    </div>
                    <div className='post_form_comp'>
                    <label>Tags</label>
                    <Select
                        defaultValue={tags}
                        onChange={settags}
                        options={options}
                        isMulti={true}
                        value={tags}
                        
                        isSearchable={true}
                    />

                    </div>
                   

                    <input type="submit" className='button' />
                </form>
            </div>
        </div>
    )
}

export default EditPostComp