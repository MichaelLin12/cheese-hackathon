import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Alert from '@/components/ui/Alert'
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  name: yup.string().label('Name').required().min(2),
  phone: yup.string().label('Phone no.').required().min(2),
  category: yup.string().label('Category').required().min(2),
  address: yup.string().label('Address').required().min(2),
  date: yup.string().label('Date').required().min(2),
  start_time: yup.string().label('Start_Time').required().min(2),
  end_time: yup.string().label('End_Time').required().min(2),
})

function AuthorForm({ values, submit }) {
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    reset(values)
  }, [values])

  const onSubmit = (submittedData) => {
    try {
      submit(submittedData) // submit data to action handler
    } catch (err) {
      setErrorMsg(err.message)
    }
  }
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {errorMsg && <Alert type="error" message={errorMsg} />}

        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            {...register('name')}
            className={`input input-bordered ${errors.name && 'input-error'}`}
          />
          {errors.name && (
            <span className="mt-1 text-xs text-error">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="phone">
            <span className="label-text">Phone no.</span>
          </label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            placeholder="0123456789"
            autoComplete="off"
            {...register('phone')}
            className={`input input-bordered ${errors.phone && 'input-error'}`}
          />
          {errors.phone && (
            <span className="mt-1 text-xs text-error">
              {errors.phone.message}
            </span>
          )}
        </div>
        
        <div className="form-control">
          <label className="label" htmlFor="category">
            <span className="label-text">Category</span>
          </label>
          <select name="category" 
            id="category" 
            {...register('category')}
            className={`input input-bordered ${errors.category && 'input-error'}`}
          >
            <option value="toys">Toys</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="home supplies">Home Supplies</option>
            <option value="office supplies">Office Supplies</option>
          </select>
          {errors.category && (
            <span className="mt-1 text-xs text-error">
              {errors.category.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="address">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            {...register('address')}
            className={`input input-bordered ${errors.address && 'input-error'}`}
          />
          {errors.address && (
            <span className="mt-1 text-xs text-error">
              {errors.address.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="date">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            autoComplete="off"
            {...register('date')}
            className={`input input-bordered ${errors.date && 'input-error'}`}
          />
          {errors.date && (
            <span className="mt-1 text-xs text-error">
              {errors.date.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="start_time">
            <span className="label-text">Start time</span>
          </label>
          <input
            type="time"
            autoComplete="off"
            {...register('start_time')}
            className={`input input-bordered ${errors.start_time && 'input-error'}`}
          />
          {errors.start_time && (
            <span className="mt-1 text-xs text-error">
              {errors.start_time.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="end_time">
            <span className="label-text">End time</span>
          </label>
          <input
            type="time"
            autoComplete="off"
            {...register('end_time')}
            className={`input input-bordered ${errors.end_time && 'input-error'}`}
          />
          {errors.end_time && (
            <span className="mt-1 text-xs text-error">
              {errors.end_time.message}
            </span>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <button type="submit" className="btn btn-primary btn-sm w-24">
            Save
          </button>
          <Link to="/distributor" className="btn btn-outline btn-sm w-24">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AuthorForm
