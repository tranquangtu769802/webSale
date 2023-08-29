package com.vti.Specification;

import com.vti.Filter.ProductFilterForm;
import com.vti.entity.Product;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class ProductSpecification {
    //    searchName : search theo từ ký tự đầu tiên
    private static final String searchName = "searchName";
    private static final String filterBrandName = "filterBrandName";


    // hung ket qua specification
    public static Specification buildWhere(ProductFilterForm form) {
        if (form == null) {
            return null;

        }

        CustomSpecification WhereByName = new CustomSpecification(searchName, form.getSearch());
        CustomSpecification WhereByBrandName = new CustomSpecification(filterBrandName, form.getBrand());

        return Specification.where(WhereByName.or(WhereByBrandName));
    }

// username: t + departname: o

    // xu ly dk, dung key va value
    @AllArgsConstructor
    static class CustomSpecification implements Specification<Product> {

        private String key;
        private Object value;

        @Override
        public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
            if (value == null) {
                return null;
            }
            switch (key) {
                case searchName:
                    // Where name LiKE '%search%'
                    return criteriaBuilder.like(root.get("name"),"%"+ value.toString().trim() + "%");
                case filterBrandName:
                    // Where name LiKE '%search%'
                    return criteriaBuilder.like(root.get("brand").get("name"), "%"+ value.toString().trim() + "%");
                default:
                    return null;
            }

        }

    }
}
