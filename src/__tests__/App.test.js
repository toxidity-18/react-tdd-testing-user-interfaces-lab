import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
describe("Portfolio Page", () => {
  test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    
    render(<App />);


    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });

 
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image with alt text", () => {

    render(<App />);


    const profileImage = screen.getByAltText(/profile picture/i);


    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src");
  });

  test("displays a second-level heading with the text `About Me`", () => {

    render(<App />);


    const aboutMeHeading = screen.getByRole("heading", {
      name: /about me/i,
      exact: false,
      level: 2,
    });
   expect(aboutMeHeading).toBeInTheDocument();
  });

  test("displays a paragraph for the biography", () => {
    // Arrange
    render(<App />);

    // Act
    const bioParagraph = screen.getByText(/I am a web developer with a passion for learning new technologies./i);

    // Assert
    expect(bioParagraph).toBeInTheDocument();
  });

  test("displays links to GitHub and LinkedIn", () => {
    // Arrange
    render(<App />);

    // Act
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });

    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();

    // Assert that the links have the correct href attributes
    expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
  });
});
