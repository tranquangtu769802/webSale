package com.vti.service;

import com.vti.Filter.BrandFilterForm;
import com.vti.Form.CreateBrandForm;
import com.vti.Form.UpdateBrandForm;
import com.vti.entity.Brand;

import java.util.List;

public interface IBrandService {
    List<Brand> getAllBrand(BrandFilterForm form);
    Brand getBrandById(int id);
    void createBrand(CreateBrandForm form) throws Exception;
    void updateBrand(UpdateBrandForm form);
    void deleteBrand(int id);
}
