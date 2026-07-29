package com.changryul.portfolio.controller;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class PortfolioControllerTest {

  @Autowired private MockMvc mockMvc;

  @Test
  void portfolioReturnsCoreContent() throws Exception {
    mockMvc
        .perform(get("/api/portfolio"))
        .andExpect(status().isOk())
        .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
        .andExpect(jsonPath("$.profile.name").value("이창렬"))
        .andExpect(jsonPath("$.profile.role").value("웹앱 풀스택 개발자"))
        .andExpect(jsonPath("$.profile.navigation", hasSize(5)))
        .andExpect(jsonPath("$.profile.navigation[0]").value("소개"))
        .andExpect(jsonPath("$.profile.navigation[1]").value("경험"))
        .andExpect(jsonPath("$.profile.navigation[2]").value("스킬"))
        .andExpect(jsonPath("$.profile.navigation[3]").value("프로젝트"))
        .andExpect(jsonPath("$.hero.primaryAction").value("프로젝트 보기"))
        .andExpect(jsonPath("$.projects", hasSize(8)))
        .andExpect(jsonPath("$.projects[0].name").value("GisDataHub"))
        .andExpect(jsonPath("$.projects[0].href").value("https://github.com/fufckddl/GISDataHub_FE"))
        .andExpect(jsonPath("$.projects[0].links", hasSize(2)))
        .andExpect(jsonPath("$.projects[0].links[0].href").value("https://github.com/fufckddl/GISDataHub_FE"))
        .andExpect(jsonPath("$.projects[0].links[1].href").value("https://github.com/fufckddl/GISDataHub_BE"))
        .andExpect(jsonPath("$.experiences[0].period").value("2024.10.25 ~ 27"))
        .andExpect(jsonPath("$.experienceDetails", hasSize(4)))
        .andExpect(jsonPath("$.experienceDetails[0].title").value("교육봉사"))
        .andExpect(jsonPath("$.experienceDetails[0].items[0].title").value("호서SW교육봉사단"))
        .andExpect(jsonPath("$.experienceDetails[1].items[0].title").value("정보처리기사"))
        .andExpect(jsonPath("$.skills", hasSize(4)))
        .andExpect(jsonPath("$.skills[0].items[0]").value("React"))
        .andExpect(
            jsonPath("$.contact.actions[0].href")
                .value("https://mail.google.com/mail/?view=cm&fs=1&to=dlckdfuf141@gmail.com"))
        .andExpect(jsonPath("$.contact.actions[1].href").value("https://github.com/fufckddl"));
  }

  @Test
  void healthReturnsUp() throws Exception {
    mockMvc
        .perform(get("/api/health"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.status").value("UP"));
  }
}
