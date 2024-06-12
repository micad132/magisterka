package com.crmbackend.backend;

import com.crmbackend.backend.Comment.CommentController;
import com.crmbackend.backend.Comment.CommentService;
import com.crmbackend.backend.Config.jwt.JwtAuthenticationFilter;
import com.crmbackend.backend.History.HistoryController;
import com.crmbackend.backend.History.HistoryService;
import lombok.AllArgsConstructor;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest({CommentController.class, HistoryController.class})
public class AuthTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CommentService commentService;

    @MockBean
    private HistoryService historyService;

    @MockBean
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Test
    public void givenUserWithClientRole_whenGetAdminEndpoint_thenForbidden() throws Exception {
        mockMvc.perform(delete("/api/v1/comment/1")
                        .with(user("admin123").roles("ADMIN")))
                .andExpect(status().isForbidden());
    }
//    @Test
//    public void givenUserWithAdminRole_whenDeleteComment_thenOk() throws Exception {
//        mockMvc.perform(delete("/api/v1/comment/1")
//                        .with(user("admin123").roles("ADMIN")))
//                .andExpect(status().isOk());
//    }
//
//    @Test
//    public void givenInvalidUrl_whenRequest_thenNotFound() throws Exception {
//        mockMvc.perform(delete("/api/v1/invalid-url")
//                        .with(user("admin123").roles("ADMIN")))
//                .andExpect(status().isNotFound());
//    }

}
