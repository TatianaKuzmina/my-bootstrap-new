import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
            <div className='col mb-3'>
                  <a className=''>
                      <img src='img/korablik.jpg' className='bi me-2' width={180} height={180}>
                      </img>
                  </a>
                <h6>
                  Море приключений для вас!
                </h6>
</div>
                      <div className='col mb-3'>

                      </div>
                    <div className='col mb-4'>
                        
                        <ul className='nav flex-column'>
                        <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> О нас</a>
                          </li>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Забронировать тур</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Контакты</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Обратная связь</a>
                          </li>
                        </ul>
                    </div>

                    <div className='col mb-4'>
                        
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Личный кабинет</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Способы оплаты</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Реквизиты</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> FAQ </a>
                          </li>
                        </ul>
                    </div>
                    <div className='col mb-4'>
                        
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> ВК </a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Инстаграм </a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Телеграм </a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Воцап </a>
                          </li>
                        </ul>
                    </div>
          
        </footer>
    </div>
  )
}

export default Footer