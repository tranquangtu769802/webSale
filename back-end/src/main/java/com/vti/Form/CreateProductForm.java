package com.vti.Form;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import java.util.Date;

@Data
@NoArgsConstructor
public class CreateProductForm {
    private String productName;

    private int price;

    private String image;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date createDate;

    private int typeId;

    private int brandId;
    private int star;
    private int stock;
}
