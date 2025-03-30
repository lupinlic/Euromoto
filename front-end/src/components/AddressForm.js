import React, { useState, useEffect } from "react";

const AddressForm = ({ onClose }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    useEffect(() => {
        fetch("https://api.mysupership.vn/v1/partner/areas/province")
            .then((res) => res.json())
            .then((data) => setProvinces(data.results))
            .catch((err) => console.error(err));
    }, []);

    const handleProvinceChange = (e) => {
        const provinceId = e.target.value;
        setSelectedProvince(provinceId);
        setDistricts([]);
        setWards([]);

        fetch(`https://api.mysupership.vn/v1/partner/areas/district?province=${provinceId}`)
            .then((res) => res.json())
            .then((data) => setDistricts(data.results))
            .catch((err) => console.error(err));
    };

    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        setSelectedDistrict(districtId);
        setWards([]);

        fetch(`https://api.mysupership.vn/v1/partner/areas/ward?district=${districtId}`)
            .then((res) => res.json())
            .then((data) => setWards(data.results))
            .catch((err) => console.error(err));
    };
    return (
        <>
            <div className="form-popup">
                <h6>Thêm địa chỉ mới</h6>
                <input type='text' placeholder='Họ tên' />
                <input type='text' placeholder='Số điện thoại' />
                <input type='text' placeholder='Địa chỉ' />
                <div className="row mt-4">
                    <div className="col-md-4">
                        <select onChange={handleProvinceChange} value={selectedProvince}>
                            <option value="">Tỉnh thành</option>
                            {provinces.map((p) => (
                                <option key={p.code} value={p.code}>
                                    {p.name}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="col-md-4">
                        <select onChange={handleDistrictChange} value={selectedDistrict} disabled={!selectedProvince}>
                            <option value="">Quận huyện</option>
                            {districts.map((d) => (
                                <option key={d.code} value={d.code}>
                                    {d.name}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="col-md-4">
                        <select disabled={!selectedDistrict}>
                            <option value="">Phường xã</option>
                            {wards.map((w) => (
                                <option key={w.code} value={w.code}>
                                    {w.name}
                                </option>
                            ))}
                        </select>

                    </div>

                </div>
                <div className="mt-4 float-end">
                    <button type="submit" className="btn btn-primary">Lưu</button>
                    <button type="button" className="ms-3 btn btn-secondary" onClick={onClose}>Đóng</button>
                </div>
            </div>
        </>
    )
}

export default AddressForm