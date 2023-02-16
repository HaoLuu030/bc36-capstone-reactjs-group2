import React from 'react'

export default function Detail() {
  return (
    <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/hanh-phuc-mau_gp03.jpeg" alt="" />
                            </div>
                            <div className="col-6">
                                <h3>Hạnh Phúc Máu 1</h3>
                                <h5>5/10 Đánh giá</h5>
                                <h4>Nội dung</h4>
                                <p>Bộ phim kể về Kya Clark - một cô gái bị gia đình bỏ rơi, lớn lên ở vùng đầm lầy phía nam thị trấn Barkley Cove vào những năm 50. Khi cảnh sát của thị trấn bị phát hiện đã qua đời, người ta bắt đầu dồn mọi mối nghi ngờ vào Kya</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-6 pl-5">
                    <h4 className='mb-3'>Trailer</h4>
                            <video width="480" height="320" controls poster='https://movienew.cybersoft.edu.vn/hinhanh/hanh-phuc-mau_gp03.jpeg'>
                                <source src="https://youtu.be/0rEKdTK1igo" type="video/mp4" />
                            </video>
                        
                    </div>
                </div>
  )
}
