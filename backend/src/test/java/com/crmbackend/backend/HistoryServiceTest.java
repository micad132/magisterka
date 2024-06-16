package com.crmbackend.backend;

import com.crmbackend.backend.Comment.CommentModel;
import com.crmbackend.backend.Comment.dto.CommentDTOResponse;
import com.crmbackend.backend.History.*;
import com.crmbackend.backend.History.dto.HistoryDTORequest;
import com.crmbackend.backend.History.dto.HistoryDTOResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(properties = {
        "TWILIO_ACCOUNT_SID=xjs",
        "TWILIO_AUTH_TOKEN=fdsfds",
        "TWILIO_PHONE_NUMBER=+747"
})
public class HistoryServiceTest {

    @Autowired
    private HistoryService historyService;

    @MockBean
    private HistoryRepository historyRepository;

    @MockBean
    private HistoryMapper historyMapper;

    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldAddAndDisplayHistory() {

        HistoryDTORequest historyDTORequest = HistoryDTORequest.builder()
                .description("Testowa historia")
                .historyActionType(HistoryActionType.COMMENT)
                .performerId(1L)
                .build();

        HistoryModel historyModel = new HistoryModel();

        when(historyMapper.mapDTOToEntity(historyDTORequest)).thenReturn(historyModel);
        when(historyRepository.save(any(HistoryModel.class))).thenReturn(historyModel);
        when(historyRepository.findAll()).thenReturn(Collections.singletonList(historyModel));

        historyService.addHistory(historyDTORequest);

        verify(historyRepository, times(1)).save(historyModel);


        List<HistoryDTOResponse> allHistories = historyService.getAllHistory();
        assertEquals(1, allHistories.size());

    }

    @Test
    void shoulDeleteHistory() {
        HistoryDTORequest historyDTORequest = HistoryDTORequest.builder()
                .description("Testowa historia")
                .historyActionType(HistoryActionType.COMMENT)
                .performerId(1L)
                .build();

        HistoryModel historyModel = new HistoryModel();

        when(historyMapper.mapDTOToEntity(historyDTORequest)).thenReturn(historyModel);
        when(historyRepository.save(any(HistoryModel.class))).thenReturn(historyModel);
        when(historyRepository.findAll()).thenReturn(Collections.singletonList(historyModel));

        historyService.addHistory(historyDTORequest);

        verify(historyRepository, times(1)).save(historyModel);


        List<HistoryDTOResponse> allHistories = historyService.getAllHistory();
        assertEquals(1, allHistories.size());

        historyService.deleteHistory(historyModel.getId());
        verify(historyRepository, times(1)).deleteById(historyModel.getId());

        when(historyRepository.findAll()).thenReturn(Collections.emptyList());


        allHistories = historyService.getAllHistory();
        assertEquals(0, allHistories.size());

    }

    @Test
    @WithMockUser(username = "worker", authorities = {"WORKER"})
    void deleteHistoryShouldThrow401WithoutJWT() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/history/1")
                        .with(csrf()))
                .andExpect(status().isUnauthorized());
    }
}
