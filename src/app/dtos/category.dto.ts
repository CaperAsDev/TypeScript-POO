import { IsDate, IsEnum, IsNotEmpty, IsUrl, Length, validate, validateOrReject } from "class-validator";
import { AccesType, Category } from '../models/category.model.mts';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}


export class CreateCategoryDto implements ICreateCategoryDto{
  //<Here wue use the '!' to tell typescript that the initialization of the properties will be done later.
  @IsNotEmpty()
  @Length(4, 30)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsDate()
  creationAt!: Date;

  @IsDate()
  updatedAt!: Date;

  @IsNotEmpty()
  @IsEnum(AccesType)
  access?: AccesType | undefined;
}

(async()=>{
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'Any name';
    dto.image = 'https://api.escuelajs.co/api/v1/products'
    await validateOrReject(dto);
    //await validate(dto);//< This is the way to validate if the assignment is correct according to the decorators.
  } catch (error) {
    console.log(error);
  }
})()
/*
!This Error will show up because we hadn't pass the validation
[
  ValidationError {
    target: CreateCategoryDto {
      name: 'Any',
      image: 'Any link',
      creationAt: undefined,
      updatedAt: undefined,
      access: undefined
    },
    value: 'Any',
    property: 'name',
    children: [],
    !constraints: { isLength: 'name must be longer than or equal to 4 characters' }
  },
  ValidationError {
    target: CreateCategoryDto {
      name: 'Any',
      image: 'Any link',
      creationAt: undefined,
      updatedAt: undefined,
      access: undefined
    },
    value: 'Any link',
    property: 'image',
    children: [],
    !constraints: { isUrl: 'image must be a URL address' }
  },
  ValidationError {
    target: CreateCategoryDto {
      name: 'Any',
      image: 'Any link',
      creationAt: undefined,
      updatedAt: undefined,
      access: undefined
    },
    value: undefined,
    property: 'creationAt',
    children: [],
    !constraints: { isDate: 'creationAt must be a Date instance' }
  },
  ValidationError {
    target: CreateCategoryDto {
      name: 'Any',
      image: 'Any link',
      creationAt: undefined,
      updatedAt: undefined,
      access: undefined
    },
    value: undefined,
    property: 'updatedAt',
    children: [],
    !constraints: { isDate: 'updatedAt must be a Date instance' }
  },
  ValidationError {
    target: CreateCategoryDto {
      name: 'Any',
      image: 'Any link',
      creationAt: undefined,
      updatedAt: undefined,
      access: undefined
    },
    value: undefined,
    property: 'access',
    children: [],
    !constraints: {
      isEnum: 'access must be one of the following values: private, public',
      isNotEmpty: 'access should not be empty'
    }
  }
] */