package com.vti.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class ProductDTO {
    private int id;

    private String name;

    private int price;

    private String image;

    private int Star;

    private String typeName;

    private String brandName;

    private int stock;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date createDate;

}
