package com.vti.service;

import com.vti.Filter.ProductFilterForm;
import com.vti.Form.CreateProductForm;
import com.vti.Form.UpdateProductForm;
import com.vti.entity.Brand;
import com.vti.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<Product> getAllProduct(ProductFilterForm form, Pageable pageable);
    Product getProductById(int id);
    Product getProductByName(String productName);
    void createProduct(CreateProductForm form) throws Exception;
    void updateProduct(UpdateProductForm form);
    void deleteProduct(int id);
    boolean isProductExistsByID(Integer id);
}
