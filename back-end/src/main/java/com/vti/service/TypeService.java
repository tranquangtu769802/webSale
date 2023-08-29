package com.vti.service;

import com.vti.Filter.TypeFilterForm;
import com.vti.Form.CreateBrandForm;
import com.vti.Form.CreateTypeForm;
import com.vti.Form.UpdateTypeForm;
import com.vti.Specification.ProductSpecification;
import com.vti.Specification.TypeSpecification;
import com.vti.entity.Brand;
import com.vti.entity.Product;
import com.vti.entity.Type;
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
public class TypeService implements ITypeService{
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IBrandRepository brandRepository;
    @Autowired
    private ITypeRepository typeRepository;
    @Override
    public List<Type> getAllType(TypeFilterForm form) {
        Specification<Type> specification = TypeSpecification.buildWhere(form);
        return typeRepository.findAll(specification);
    }

    @Override
    public Type getTypeById(int id) {
        return typeRepository.findById(id);
    }

    @Override
    @Transactional
    public void createType(CreateTypeForm form) throws Exception{
        //create Type
        Type type = typeRepository.save(modelMapper.map(form, Type.class));
        //createProduct
        List<Product> products = new ArrayList<>();
        List<CreateTypeForm.ProductFormList> productForms = form.getProductFormList();
        // convert
        productForms.forEach(productForm -> {
            Product product = modelMapper.map(productForm, Product.class);
            product.setType(type);
            product.setBrand(brandRepository.findById(productForm.getBrandId()));
            product.setType(typeRepository.findById(productForm.getTypeId()));
            products.add(product);
        });
        productRepository.saveAll(products);
    }

    @Override
    @Transactional
    public void updateType(UpdateTypeForm form) {
        typeRepository.save(modelMapper.map(form, Type.class));
    }

    @Override
    public void deleteType(int id) {
        typeRepository.deleteById(id);
    }
}
