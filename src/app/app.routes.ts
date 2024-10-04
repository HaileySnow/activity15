
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarmodelListComponent } from './carmodel-list/carmodel-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { SportListComponent } from './sport-list/sport-list.component';
import { VegetablesListComponent } from './vegetables-list/vegetables-list.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { GameListComponent } from './game-list/game-list.component';
import { SoftwareListComponent } from './software-list/software-list.component';
import { PhonecontactListComponent } from './phonecontact-list/phonecontact-list.component';
import { MusicplayListComponent } from './musicplay-list/musicplay-list.component';
import { FoodmenuListComponent } from './foodmenu-list/foodmenu-list.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { LectureListComponent } from './lecture-list/lecture-list.component';
import { StationaryListComponent } from './stationary-list/stationary-list.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { LaptopSpecsListComponent } from './laptop-specs-list/laptop-specs-list.component';
import { ComputerHardwareListComponent } from './computer-hardware-list/computer-hardware-list.component';
import { MobileappListComponent } from './mobileapp-list/mobileapp-list.component';
import { VideoListComponent } from './video-list/video-list.component';
import { TvshowListComponent } from './tvshow-list/tvshow-list.component';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { AccessoryListComponent } from './accessory-list/accessory-list.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { PaintingListComponent } from './painting-list/painting-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';


export const routes: Routes = [
	{
		title: 'Student List',
		component: StudentListComponent,
		path: 'student-list',
	},
	{
		title: 'Employee List',
		component: EmployeeListComponent,
		path: 'employee-list',
	},
	{
		title: 'Fruit List',
		component: FruitListComponent,
		path: 'fruit-list',
	},
	{
		title: 'Course List',
		component: CourseListComponent,
		path: 'course-list',
	},
	{
		title: 'Book List',
		component: BookListComponent,
		path: 'book-list',
	},
	{
		title: 'City List',
		component: CityListComponent,
		path: 'city-list',
	},
	{
		title: 'Movie List',
		component: MovieListComponent,
		path: 'movie-list',
	},
	{
		title: 'Car Model List',
		component: CarmodelListComponent,
		path: 'carmodel-list',
	},
	{
		title: 'Product List',
		component: ProductListComponent,
		path: 'product-list',
	},
	{
		title: 'Subject List',
		component: SubjectListComponent,
		path: 'subject-list',
	},
	{
		title: 'Country List',
		component: CountryListComponent,
		path: 'country-list',
	},
	{
		title: 'Sports List',
		component: SportListComponent,
		path: 'sports-list',
	},
	{
		title: 'Vegetables List',
		component: VegetablesListComponent,
		path: 'vegetables-list',
	},
	{
		title: 'Animals List',
		component: AnimalsListComponent,
		path: 'animals-list',
	},
	{
		title: 'Tool List',
		component: ToolListComponent,
		path: 'tool-list',
	},
	{
		title: 'Language List',
		component: LanguageListComponent,
		path: 'language-list',
	},
	{
		title: 'Game List',
		component: GameListComponent,
		path: 'game-list',
	},
	{
		title: 'Software List',
		component: SoftwareListComponent,
		path: 'software-list',
	},
	{
		title: 'Phone Contact List',
		component: PhonecontactListComponent,
		path: 'phonecontact-list',
	},
	{
		title: 'Music Play List',
		component: MusicplayListComponent,
		path: 'musicplay-list',
	},
	{
		title: 'Food Menu List',
		component: FoodmenuListComponent,
		path: 'foodmenu-list',
	},
	{
		title: 'Grocery List',
		component: GroceryListComponent,
		path: 'grocery-list',
	},
	{
		title: 'Classroom List',
		component: ClassroomListComponent,
		path: 'classroom-list',
	},
	{
		title: 'Inverntory List',
		component: InventoryListComponent,
		path: 'inventory-list',
	},
	{
		title: 'Lecture List',
		component: LectureListComponent,
		path: 'lecture-list',
	},
    {
		title: 'Stationery List',
		component: StationaryListComponent,
		path: 'stationery-list',
	},
	{
		title: 'Flower List',
		component: FlowerListComponent,
		path: 'flower-list',
	},
	{
		title: 'Destination List',
		component: DestinationListComponent,
		path: 'destination-list',
	},
	{
		title: 'Laptop List',
		component: LaptopListComponent,
		path: 'laptop-list',
	},
	{
		title: 'Laptop Specs List',
		component: LaptopSpecsListComponent,
		path: 'laptop-specs-list',
	},
	{
		title: 'Computer Hardware List',
		component: ComputerHardwareListComponent,
		path: 'computer-hardware-list',
	},
	{
		title: 'Mobile App List',
		component: MobileappListComponent,
		path: 'mobile-app-list',
	},
	{
		title: 'Video List',
		component: VideoListComponent,
		path: 'video-list',
	},
	{
		title: 'TV Show List',
		component: TvshowListComponent,
		path: 'tvshow-list',
	},
	{
		title: 'Furniture List',
		component: FurnitureListComponent,
		path: 'furniture-list',
	},
	{
		title: 'Accessory List',
		component: AccessoryListComponent,
		path: 'accessory-list',
	},
	{
		title: 'Building List',
		component: BuildingListComponent,
		path: 'building-list',
	},
    {
		title: 'Painting List',
		component: PaintingListComponent,
		path: 'painting-list',
	},
	{
		title: 'Artist List',
		component: ArtistListComponent,
		path: 'artist-list',
	},


	

]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}