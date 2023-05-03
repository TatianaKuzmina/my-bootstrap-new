import React from 'react';
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';
import { 
  CircleMarker,
  MapContainer, 
  Marker, 
  Polygon, 
  Popup,
  TileLayer 
} from 'react-leaflet';
import { Tooltip } from 'react-leaflet';
import axios from 'axios'

const colorOptions = {color:'purple'}
const centerPolygon=[
  [
      [55.763967, 37.590876],
      [55.764283, 37.653548],
      [55.743876, 37.651683],
      [55.741771, 37.585280]
    
  ]
]

const center=[55.751025, 37.627873]


const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
      alert('Заявка отправлена')
      console.log(data);

  }    

  return (
    <div>
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
      <h1>Заполните заявку на обратную связь</h1>
        <div className='input-group mb-3'>
          <input
          {...register('lastName',{
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i 
          })}
          type="text"
          className='form-control'
          placeholder='Фамилия'/>
        </div>
        {errors?.lastName?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.lastName?.type === 'maxLength'&&(
          <p>Поле не может содержать больше 50 символов</p>
        )}
        {errors?.lastName?.type === 'pattern'&&(
          <p>Поле заполненно некорректно</p>
        )}

          <div className='input-group mb-3'>
          <input
          {...register('firstName',{
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i 
          })}
          type="text"
          className='form-control'
          placeholder='Имя'/>
        </div>
        {errors?.firstName?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.firstName?.type === 'maxLength'&&(
          <p>Поле не может содержать больше 50 символов</p>
        )}
        {errors?.firstName?.type === 'pattern'&&(
          <p>Поле заполненно некорректно</p>
        )}

          <div className='input-group mb-3'>
          <input
          {...register('patronymic',{
            required: false,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i 
          })}
          type="text"
          className='form-control'
          placeholder='Отчество'/>
        </div>
        {errors?.patronymic?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.patronymic?.type === 'maxLength'&&(
          <p>Поле не может содержать больше 50 символов</p>
        )}
        {errors?.patronymic?.type === 'pattern'&&(
          <p>Поле заполненно некорректно</p>
        )}

          <div className='input-group mb-3'>
          <input
          {...register('email',{
            required: false,
            maxLength:50,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
          })}
          type="text"
          className='form-control'
          placeholder='Email'/>
        </div>
        {errors?.email?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.email?.type === 'maxLength'&&(
          <p>Поле не может содержать больше 50 символов</p>
        )}
        {errors?.email?.type === 'pattern'&&(
          <p>Поле заполненно некорректно</p>
        )}


      <input className='btn btn-outline-primary' type="submit" />
    </form>
    <br></br>
    <MapContainer
    center={center}
    zoom={10}
    style={{
      width: '100vw',
      height: '500px',
    }}
    >
      <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=67MxZlRAnFqd0eay4ZTB'
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <CircleMarker
      center={center}
      pathOptions={{color:'black'}}
      radius={10}
      />

    <Marker position={center}>
      <Popup>
        Мы находимся тут
      </Popup>
      <Tooltip>
        При наведении
      </Tooltip>
    </Marker>
    <Polygon positions={centerPolygon}  pathOptions={colorOptions}/>
    
    </MapContainer>
    </div>
  );
}
  


export default Form