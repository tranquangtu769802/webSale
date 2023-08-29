package com.vti.service;

import com.vti.Filter.ProductFilterForm;
import com.vti.Form.CreateProductForm;
import com.vti.Form.UpdateProductForm;
import com.vti.Specification.ProductSpecification;
import com.vti.entity.Product;
import com.vti.responsitory.IProductRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
public class ProductService implements IProductService{
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<Product> getAllProduct(ProductFilterForm form, Pageable pageable) {
        Specification<Product> specification = ProductSpecification.buildWhere(form);
        return productRepository.findAll(specification, pageable);
    }

    @Override
    public Product getProductById(int id) {
        return productRepository.findById(id);
    }

    @Override
    public Product getProductByName(String productName) {
        return productRepository.findByName(productName);
    }

    @Override
    @Transactional
    public void createProduct(CreateProductForm form) throws Exception{

        TypeMap<CreateProductForm, Product> typeMap = modelMapper.getTypeMap(CreateProductForm.class, Product.class);
        if (typeMap == null){
            modelMapper.addMappings(new PropertyMap<CreateProductForm, Product>() {
                @Override
                protected void configure() {
                    skip(destination.getId());// không convert trường getID -> tránh gây lỗi hiểu nhầm thành update khi create
                }
            });
        }
        productRepository.save(modelMapper.map(form, Product.class));
    }
    @Override
    @Transactional
    public void updateProduct(UpdateProductForm form) {
        productRepository.save(modelMapper.map(form, Product.class));
    }

    @Override
    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    @Override
    public boolean isProductExistsByID(Integer id) {
        return productRepository.existsById(id);
    }
}
