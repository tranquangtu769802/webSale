package com.vti.service;

import com.vti.Filter.BrandFilterForm;
import com.vti.Form.CreateBrandForm;
import com.vti.Form.CreateProductForm;
import com.vti.Form.UpdateBrandForm;
import com.vti.Specification.BrandSpecification;
import com.vti.Specification.ProductSpecification;
import com.vti.entity.Brand;
import com.vti.entity.Product;
import com.vti.responsitory.IBrandRepository;
import com.vti.responsitory.IProductRepository;
import com.vti.responsitory.ITypeRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
@Service
public class BrandService implements IBrandService{
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private ITypeRepository typeRepository;
    @Autowired
    private IBrandRepository brandRepository;
    @Override
    public List<Brand> getAllBrand(BrandFilterForm form) {
        Specification<Brand> specification = BrandSpecification.buildWhere(form);
        return brandRepository.findAll(specification);
    }

    @Override
    public Brand getBrandById(int id) {
        return brandRepository.findById(id);
    }

    @Override
    @Transactional
    public void createBrand(CreateBrandForm form) throws Exception{
        //createBrand
        Brand brand = brandRepository.save(modelMapper.map(form, Brand.class));
        //createProduct
        List<Product> products = new ArrayList<>();
        List<CreateBrandForm.ProductForm> productForms = form.getProductForms();
        // convert
        productForms.forEach(productForm -> {
            Product product = modelMapper.map(productForm, Product.class);
            product.setBrand(brand);
            product.setBrand(brandRepository.findById(productForm.getBrandId()));
            product.setType(typeRepository.findById(productForm.getTypeId()));
            products.add(product);
        });
        productRepository.saveAll(products);
    }

    @Override
    @Transactional
    public void updateBrand(UpdateBrandForm form) {
        brandRepository.save(modelMapper.map(form, Brand.class));
    }

    @Override
    public void deleteBrand(int id) {
        brandRepository.deleteById(id);
    }
}
