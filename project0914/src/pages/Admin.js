import React,{Component} from 'react';
import img01 from '../img/debit-card.png';
import img02 from '../img/won.png';
import img03 from '../img/graph03.png';

export default class Admin extends Component{
    render(){
        return(
            <div id="admin">
            <div className="title">
               <h2>관리자페이지</h2>
            </div>
               <div className="admin_sec01">
                <li>
                    <div className="icon">
                    <img src={img01}></img>
                    </div>
                    <div className="sec_title">결제건수</div>
                    <div className="sec_num">X건</div>
                </li>
                <li>
                    <div className="icon">
                    <img src={img02}></img>
                    </div>
                    <div className="sec_title">입금건수</div>
                    <div className="sec_num">X건</div>
                </li>
               </div>
                <div className="admin_sec02">
                    <div className="sec_box">
                        <div className="sec_title">주문처리현황</div>
                        <ul>
                            <li>입금확인중<div className="sec_count"><span>X</span>건</div></li>
                            <li>신규주문<div className="sec_count"><span>X</span>건</div></li>
                            <li>미확인주문<div className="sec_count"><span>X</span>건</div></li>
                            <li>서비스이용중<div className="sec_count"><span>X</span>건</div></li>
                        </ul>
                    </div>
                    <div className="sec_box">
                        <div className="sec_title">매출정산관리</div>
                        <ul>
                            <li>전체매출건수<div className="sec_count"><span>X</span>건</div></li>
                            <li>정산완료건수<div className="sec_count"><span>X</span>건</div></li>
                            <li>입금신청건수<div className="sec_count"><span>X</span>건</div></li>
                        </ul>
                    </div>
                    <div className="sec_box">
                        <div className="sec_title">스토어현황</div>
                        <ul>
                            <li>전체스토어<div className="sec_count"><span>X</span>건</div></li>
                            <li>신규승인요청<div className="sec_count"><span>X</span>건</div></li>
                        </ul>
                    </div>
                    <div className="sec_box">
                        <div className="sec_title">회원현황</div>
                        <ul>
                            <li>전체회원<div className="sec_count"><span>X</span>건</div></li>
                            <li>신규가입<div className="sec_count"><span>X</span>건</div></li>
                            <li>휴먼회원<div className="sec_count"><span>X</span>건</div></li>
                        </ul>
                    </div>
                </div>
                <div className="admin_sec03">
                        <div className="sec_box01">
                        <div className="sec_box">
                            <li>방문자수</li>
                            <h2>X,XXX<span>명</span></h2>
                        </div>
                        <div className="sec_box">
                            <li>상품조회</li>
                            <h2>X,XXX<span>회</span></h2>
                        </div>
                        </div>
                        <div className="sec_box02">
                            <img src={img03}></img>
                        </div>
                </div>
                <div className="admin_sec04">
                    <div className="sec_box">
                        <h2>스토어공지<span>더보기+</span></h2>
                        <ul>
                            <li>스토어공지 스토어공지<span>2018.09.18</span></li>
                            <li>스토어공지 스토어공지<span>2018.09.18</span></li>
                            <li>스토어공지 스토어공지<span>2018.09.18</span></li>
                            <li>스토어공지 스토어공지<span>2018.09.18</span></li>
                            <li>스토어공지 스토어공지<span>2018.09.18</span></li>
                        </ul>
                    </div>
                    <div className="sec_box">
                        <h2>FAQ<span>더보기+</span></h2>
                        <ul>
                            <li>FAQ 스토어문의<span>2018.09.18</span></li>
                            <li>FAQ 스토어문의<span>2018.09.18</span></li>
                            <li>FAQ 스토어문의<span>2018.09.18</span></li>
                            <li>FAQ 스토어문의<span>2018.09.18</span></li>
                            <li>FAQ 스토어문의<span>2018.09.18</span></li>
                        </ul>                       

                    </div>
                </div>
            </div>
        );
    }
}