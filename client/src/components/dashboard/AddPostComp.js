import React, { useState, useEffect } from 'react'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import NewsService from '../../service/api/NewsService';
import Select from 'react-select';
function AddPostComp() {
    const history = useHistory();

    const { newsAdd } = NewsService;
    const [image, setimage] = useState("");



    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [tags, settags] = useState([]);
    const [news_data, setnews_data] = useState({});



    const { control, register, handleSubmit, reset, getValues, setValue, watch, formState: { errors } } = useForm(
    );

    const [temp_image_link, settemp_image_link] = useState("")

    const { fields, append, remove } = useFieldArray({
        control,
        name: "insight_arr"
    });



    const onSubmit = data => {

        const res = {
            "title": data.title,
            "content": data.content,
            "form_link": data.form_link,
            "read_more_link": data.read_more_link,
            "timestamp": Date.now(),
            "author": "shivam",
            "image": data?.image ? data?.image : "https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/SourceImage/news-corp-359.jpg",
            "views": 1,
            "tags": tags,
            "addAt": Date.now(),
            "updatedAt": Date.now(),
            "poll_user_responses": [],
            "poll_title": data.poll_title,
            "news_type": data.news_type,
            "insight_arr": fields
        }
        EditNewsFun(res)
        //console.log(res)
        reset()
        history.push("/")
    };


    const EditNewsFun = async (data) => {
        // if (!image) { alert("Please attach image...") }

        // if (image) {
        //     const res = await newsAdd(data);
        //     console.log(res, "RES");
        // }

        const res = await newsAdd(data);
             console.log(res, "RES");
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

    useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log(value, name, type));
        return () => subscription.unsubscribe();
    }, [watch]);
    const watchAllFields = watch();

    const myStyle={

        width:'20%',
        height:'200px',
    };
    return (
        <div className='add_post_form'>
            <div className='add_post_form_head'>
                <h2>Add Post</h2>
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
                        <label>Read More Link </label>
                        <input {...register("read_more_link", { required: false })} />
                        {errors.read_more_link && <span className='error'>Read More Link field is required</span>}
                    </div>
                    <div className='post_form_comp'>
                        <label>News Type </label>
                        <select {...register("news_type", { required: false })}  >
                            <option value="feed">feed</option>
                            <option value="slide">slide</option>
                            <option value="insight">insight</option>
                        </select>
                        {errors.news_type && <span className='error'>News Type field is required</span>}

                    </div>
                    {watchAllFields.news_type === "insight" && <div className='post_form_comp'>
                        <label>Insight Images Link </label>
                        <input type="text" onChange={(e)=>settemp_image_link(e.target.value)} value={temp_image_link} placeholder='Image Link'/>
                        <ul>
                            {fields.map((item, index) => (
                                <li key={item.id} className='post_form_comp flex_row'>
                                    <p>{index+1}  </p>
                                    <img src={fields[index].image} style={{width:100,height:100,marginBottom:5}}/>
                                    <button  className='dynamic_button' type="button" onClick={() => remove(index)}>Delete</button>
                                </li>
                            ))}
                            <button
                                className='dynamic_button'
                                type="button"
                                onClick={() => {append({_id:Date.now()+"image", image: temp_image_link });settemp_image_link("")}}
                            >
                                Add 
                            </button>
                        </ul>


                        {errors.news_type && <span className='error'>News Type field is required</span>}

                    </div>}


                    <div className='post_form_comp'>
                        <label>Poll Title ( IF THIS IS FOR POLL)</label>
                        <input {...register("poll_title", { required: false })} />
                        {errors.poll_title && <span className='error'>Poll Title field is required</span>}
                    </div>
                    <div className='post_form_comp'>
                        <label>Image</label>
                        {/* <div className='dashboard_articles_comp_center articles_comp'>
                            <img src={image} />
                        </div>

                        <input type="file" accept="image/jpeg, image/png" onChange={(e) => encodeImageFileAsURL(e.target.files[0])} /> */}
                        <input {...register("image", { required: false })} />
                        {errors.image && <span className='error'>image Link field is required</span>}

                    </div>
                    <div className='post_form_comp'>
                        <label>Tags</label>
                        <Select
                            defaultValue={tags}
                            onChange={settags}
                            options={options}
                            isMulti={true}
                            isSearchable={true}
                        />

                    </div>


                    <input type="submit" className='button' />
                </form>
            </div>
        </div>
    )
}

export default AddPostComp
