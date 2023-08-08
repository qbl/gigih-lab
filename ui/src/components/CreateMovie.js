import React from 'react'
import { useForm } from "react-hook-form";
import { createMovie } from '../services/MovieService'

export default function CreateMovie(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createMovie(data).then(response => {
            props.movieCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Movies List</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input {...register("title")} placeholder="Create a Movie" className="form-control" name="title" id="title" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Year</label>
                            <input {...register("year")} placeholder="Year Released" className="form-control" name="year" id="year" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger mrgnbtm" />
                </form>
                </div>
            </div>
        </div>
    )
}
