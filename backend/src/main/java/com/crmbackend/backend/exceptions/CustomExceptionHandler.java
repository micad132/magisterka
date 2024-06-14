package com.crmbackend.backend.exceptions;

import com.crmbackend.backend.utils.MessageResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<MessageResponse> handleAccessDeniedException(AccessDeniedException ex) {
        String errorMessage = "You have no permission to do this!";
        return new ResponseEntity<>(new MessageResponse(errorMessage), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<MessageResponse> handleUserAlreadyExistsException(UserAlreadyExistsException ex) {
        return new ResponseEntity<>(new MessageResponse(ex.getMessage()), HttpStatus.BAD_REQUEST);
    }
}
