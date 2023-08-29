package com.vti.Form;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class CreateBrandForm {
    private String brandName;

    private List<ProductForm> productForms;

    @Data
    @NoArgsConstructor
    public static class ProductForm {
        private Integer id;

        private String productName;

        private String price;

        private String image;

        @DateTimeFormat(pattern = "dd-MM-yyyy")
        private Date createDate;

        private int typeId;

        private int brandId;

        private int star;
        private int stock;
    }
}
