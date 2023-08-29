package com.vti.Validate;

import com.vti.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class IdExistsValidate implements ConstraintValidator<IdExists, Integer> {
    @Autowired
    private IProductService productService;
    @Override
    public boolean isValid(Integer integer, ConstraintValidatorContext constraintValidatorContext) {
        return productService.isProductExistsByID(integer);
    }
}
