package com.vti.controller;

import com.vti.DTO.BrandDTO;
import com.vti.Filter.BrandFilterForm;
import com.vti.Form.CreateBrandForm;
import com.vti.Form.UpdateBrandForm;
import com.vti.entity.Brand;
import com.vti.service.IBrandService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(value = "/api/v1/brands")
@CrossOrigin("*")
public class BrandController{
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private IBrandService brandService;
    @GetMapping()
    public List<BrandDTO> getAllBrand(BrandFilterForm form) {
        return  modelMapper.map(brandService.getAllBrand(form), new TypeToken<List<BrandDTO>>() {
        }.getType());
    }
    @GetMapping(value = "/{id}")
    public BrandDTO getBrandById(@PathVariable(name = "id") int id) {
        return modelMapper.map(brandService.getBrandById(id), BrandDTO.class);
    }
    @PostMapping()
    public void createBrand(@RequestBody CreateBrandForm form) throws Exception {

        brandService.createBrand(form);
    }
    @PutMapping(value = "/{id}")
    public void updateBrand(@PathVariable(name = "id") int id,@RequestBody UpdateBrandForm form) {
        form.setId(id);
        brandService.updateBrand(form);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteBrand(int id) {
        brandService.deleteBrand(id);
    }
}
