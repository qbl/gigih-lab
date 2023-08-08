import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { editMovie } from '../services/MovieService'

export default function EditMovieModal({movie, movieEdited}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      editMovie(data).then(response => {
        movieEdited(response);
        setShow(false);
    });
    };

    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Edit
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Movie Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="movieId">Id</label>
                  <input {...register("id")} type="text" className="form-control" defaultValue={movie.id} name="id" id="id" disabled />
                </div>

            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="movie">Title</label>
                    <input {...register("title")} type="text" className="form-control" defaultValue={movie.title} name="title" id="title" placeholder="Create a Movie" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="year">Year</label>
                    <input {...register("year")} type="text" className="form-control" defaultValue={movie.year} name="year" id="year" placeholder="Year Released" />
                </div>
            </div>
            <div className="btncenter">
              <input type="submit" className="btn btn-danger" />
            </div>
            </form>
          </Modal.Body>

        </Modal>
      </>
    );
}
