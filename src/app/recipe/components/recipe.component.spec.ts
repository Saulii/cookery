import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RecipeComponent } from "./recipe.component";
import { RecipeService } from "../services/recipe.service";
import { of } from "rxjs";

const TEST_RECIPES = [
  {
    _id: "5be9dfbc45a1aedf92a4c95d",
    title: "Recipe1",
    description: "Description of Recipe 1"
  },
  {
    _id: "5be9e06145a1aedf92a4c982",
    title: "Recipe2",
    description: "Description of Recipe 2"
  },
  {
    _id: "5be9e0e545a1aedf92a4c995",
    title: "Recipe3",
    description: "Description of Recipe 3"
  }
];

describe("RecipeComponent", () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeComponent],
      providers: [
        {
          provide: RecipeService,
          useValue: {
            getRecipes() {
              return of(TEST_RECIPES);
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
