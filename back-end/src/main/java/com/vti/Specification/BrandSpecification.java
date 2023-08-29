package com.vti.Specification;

import com.vti.Filter.BrandFilterForm;
import com.vti.Filter.ProductFilterForm;
import com.vti.entity.Brand;
import com.vti.entity.Product;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class BrandSpecification {
    //    searchName : search theo từ ký tự đầu tiên
    private static final String searchBrand = "searchBrand";


    // hung ket qua specification
    public static Specification buildWhere(BrandFilterForm form) {
        if (form == null) {
            return null;

        }

        ProductSpecification.CustomSpecification WhereByName = new ProductSpecification.CustomSpecification(searchBrand, form.getSearch());

        return Specification.where(WhereByName);
    }


    // xu ly dk, dung key va value
    @AllArgsConstructor
    static class CustomSpecification implements Specification<Brand> {

        private String key;
        private Object value;

        @Override
        public Predicate toPredicate(Root<Brand> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
            if (value == null) {
                return null;
            }
            switch (key) {
                case searchBrand:
                    // Where name LiKE '%search%'
                    return criteriaBuilder.like(root.get("name"), value.toString().trim() + "%");

                default:
                    return null;
            }

        }

    }
}
